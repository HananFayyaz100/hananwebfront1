import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

const API_BASE_URL = "http://localhost:5000/api/projects";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Form States
  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [image, setImage] = useState(null);
  const [isFeatured, setIsFeatured] = useState(false);
  const [order, setOrder] = useState(0);

  // Extra UI-only state (does not touch API/auth logic)
  const [imagePreview, setImagePreview] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Helper to fetch latest token dynamically
  const getAuthHeader = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Session expired. Please login again.");
      window.location.href = "/login";
      return null;
    }
    return { Authorization: `Bearer ${token}` };
  };

  // Fetch all projects from API
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_BASE_URL}?t=${Date.now()}`);
      setProjects(res.data);
    } catch (err) {
      console.error("Failed to fetch projects:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Revoke object URLs created for the local image preview
  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  // Form Reset Helper
  const resetForm = () => {
    setEditingId(null);
    setTitle("");
    setDescription("");
    setLiveUrl("");
    setImage(null);
    setImagePreview(null);
    setIsFeatured(false);
    setOrder(0);
  };

  // Set Project Data into Form for Editing
  const handleEditClick = (project) => {
    setEditingId(project._id);
    setTitle(project.title);
    setDescription(project.description);
    setLiveUrl(project.liveUrl);
    setIsFeatured(project.isFeatured || false);
    setOrder(project.order || 0);
    setImage(null);
    setImagePreview(project.imageUrl || null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Image select handler (adds a local preview, does not change upload logic)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file || null);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Submit Handler for Create & Edit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const headers = getAuthHeader();
    if (!headers) return;

    let formattedUrl = liveUrl.trim();
    if (
      !formattedUrl.startsWith("http://") &&
      !formattedUrl.startsWith("https://")
    ) {
      formattedUrl = `https://${formattedUrl}`;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("liveUrl", formattedUrl);
    formData.append("isFeatured", isFeatured);
    formData.append("order", order);

    if (image) {
      formData.append("image", image);
    }

    try {
      setSubmitting(true);

      if (editingId) {
        // Edit Mode (PUT)
        await axios.put(`${API_BASE_URL}/${editingId}`, formData, {
          headers: {
            ...headers,
            "Content-Type": "multipart/form-data",
          },
        });
        alert("Project updated successfully!");
      } else {
        // Create Mode (POST)
        if (!image) {
          alert("Please select an image for new project");
          setSubmitting(false);
          return;
        }
        await axios.post(API_BASE_URL, formData, {
          headers: {
            ...headers,
            "Content-Type": "multipart/form-data",
          },
        });
        alert("Project created successfully!");
      }

      resetForm();
      fetchProjects();
    } catch (err) {
      if (err.response?.status === 401) {
        alert("Session expired! Logout karke dubara Login karein.");
      } else {
        alert(err.response?.data?.message || "Operation failed");
      }
    } finally {
      setSubmitting(false);
    }
  };

  // Delete Handler
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?"))
      return;

    const headers = getAuthHeader();
    if (!headers) return;

    try {
      await axios.delete(`${API_BASE_URL}/${id}`, { headers });
      alert("Project deleted successfully!");
      fetchProjects();
    } catch (err) {
      if (err.response?.status === 401) {
        alert("Session expired! Logout karke dubara Login karein.");
      } else {
        alert(err.response?.data?.message || "Failed to delete project");
      }
    }
  };

  // Analytics Math
  const totalProjects = projects.length;
  const featuredCount = projects.filter((p) => p.isFeatured).length;
  const latestUpload =
    projects.length > 0
      ? new Date(
          Math.max(...projects.map((p) => new Date(p.createdAt || Date.now())))
        ).toLocaleDateString()
      : "N/A";

  // Search is UI-only filtering over the already-fetched list
  const filteredProjects = projects.filter((p) =>
    p.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dash">
      {/* Top bar */}
      <div className="dash-topbar">
        <div className="dash-brand">
          <div className="dash-brand-mark">C</div>
          <div className="dash-brand-text">
            <h1>Curator</h1>
            <span>Project management</span>
          </div>
        </div>
        <div className="dash-topbar-actions">
          <a href="/" className="dash-link">
            View site
          </a>
          <button
            className="btn-logout"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="dash-shell">
        {/* Analytics Summary Header */}
        <div className="dash-stats">
          <div className="stat-hero">
            <span className="stat-hero-label">Total projects</span>
            <span className="stat-hero-number">{totalProjects}</span>
            <span className="stat-hero-sub">Across the entire catalog</span>
          </div>

          <div className="stat-stack">
            <div className="stat-mini">
              <span className="stat-mini-label">Featured on home</span>
              <span className="stat-mini-value is-accent-success">
                {featuredCount}
              </span>
            </div>
            <div className="stat-mini">
              <span className="stat-mini-label">Last activity</span>
              <span className="stat-mini-value is-accent-info">
                {latestUpload}
              </span>
            </div>
          </div>
        </div>

        {/* Form (Create & Edit) */}
        <div className="dash-form-card">
          <div className="dash-form-heading">
            <h3>{editingId ? "Edit project" : "Add new project"}</h3>
            {editingId && <span className="mode-pill">Editing</span>}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="dash-form-grid">
              {/* Left column: text fields */}
              <div>
                <div className="field-group">
                  <label className="field-label" htmlFor="title">
                    Project title
                  </label>
                  <input
                    id="title"
                    type="text"
                    placeholder="e.g. Aurora Portfolio Site"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="dash-input"
                  />
                </div>

                <div className="field-group">
                  <label className="field-label" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    id="description"
                    placeholder="What is this project, and what makes it worth showing?"
                    required
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="dash-textarea"
                  />
                </div>

                <div className="field-group">
                  <label className="field-label" htmlFor="liveUrl">
                    Live demo URL
                  </label>
                  <input
                    id="liveUrl"
                    type="text"
                    placeholder="e.g. aliuiu.com"
                    required
                    value={liveUrl}
                    onChange={(e) => setLiveUrl(e.target.value)}
                    className="dash-input"
                  />
                </div>
              </div>

              {/* Right column: image + toggles */}
              <div>
                <div className="field-group">
                  <label className="field-label">
                    {editingId
                      ? "Project image (leave empty to keep existing)"
                      : "Project image"}
                  </label>

                  <div className="image-dropzone">
                    <div className="image-dropzone-preview">
                      {imagePreview ? (
                        <img src={imagePreview} alt="Selected preview" />
                      ) : (
                        <span className="placeholder-icon">🖼</span>
                      )}
                    </div>
                    <label htmlFor="image-upload" className="file-input-label">
                      {imagePreview ? "Change image" : "Choose image"}
                    </label>
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="file-input-hidden"
                    />
                    <p className="image-dropzone-hint">
                      JPG or PNG, landscape orientation looks best in the grid.
                    </p>
                  </div>
                </div>

                <div className="field-group">
                  <div className="field-row">
                    <label className="checkbox-field">
                      <input
                        type="checkbox"
                        checked={isFeatured}
                        onChange={(e) => setIsFeatured(e.target.checked)}
                      />
                      Featured on home page
                    </label>

                    <div className="field-order">
                      <span className="field-label" style={{ margin: 0 }}>
                        Order
                      </span>
                      <input
                        type="number"
                        value={order}
                        onChange={(e) => setOrder(Number(e.target.value))}
                        className="dash-input"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="dash-form-actions">
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary"
                >
                  {submitting
                    ? "Saving…"
                    : editingId
                    ? "Update project"
                    : "Publish project"}
                </button>

                {editingId && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="btn-secondary"
                  >
                    Cancel edit
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Projects List Table */}
        <div className="dash-table-header">
          <h3 className="dash-section-title">
            All managed projects
            <span className="count">
              {filteredProjects.length} of {projects.length}
            </span>
          </h3>

          <div className="dash-search">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search by title…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {loading ? (
          <div className="dash-table-wrap">
            <div className="dash-loading-rows">
              <div className="skeleton-row" />
              <div className="skeleton-row" />
              <div className="skeleton-row" />
            </div>
          </div>
        ) : projects.length === 0 ? (
          <div className="dash-empty">
            <div className="dash-empty-icon">✦</div>
            <h4>No projects yet</h4>
            <p>Add your first project using the form above.</p>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="dash-empty">
            <div className="dash-empty-icon">✦</div>
            <h4>No matches for “{searchTerm}”</h4>
            <p>Try a different title, or clear the search.</p>
          </div>
        ) : (
          <div className="dash-table-wrap">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Live URL</th>
                  <th>Featured</th>
                  <th>Created at</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map((proj) => (
                  <tr key={proj._id}>
                    <td>
                      <img
                        src={proj.imageUrl}
                        alt={proj.title}
                        className="row-thumb"
                      />
                    </td>
                    <td className="row-title">{proj.title}</td>
                    <td>
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="row-link"
                      >
                        {proj.liveUrl}
                      </a>
                    </td>
                    <td>
                      {proj.isFeatured ? (
                        <span className="badge is-yes">
                          <span className="badge-dot" />
                          Yes
                        </span>
                      ) : (
                        <span className="badge is-no">
                          <span className="badge-dot" />
                          No
                        </span>
                      )}
                    </td>
                    <td className="row-date">
                      {proj.createdAt
                        ? new Date(proj.createdAt).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td>
                      <div className="row-actions">
                        <button
                          onClick={() => handleEditClick(proj)}
                          className="btn-edit"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(proj._id)}
                          className="btn-delete"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
