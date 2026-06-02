import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";

const API_BASE = import.meta.env.VITE_API_URL || "/api";

function ProfileCard() {
  const [imageSrc, setImageSrc] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetch(`${API_BASE}/profile-image`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.imageUrl) {
          setImageSrc(data.imageUrl);
        }
      })
      .catch(() => {
        setImageSrc(null);
      });
  }, []);

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setUploadError("");
    setSuccessMessage("");

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(`${API_BASE}/upload-profile`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Upload failed.");
      }

      setImageSrc(result.imageUrl);
      setSuccessMessage("Profile image uploaded successfully.");
    } catch (error) {
      setUploadError(error.message || "Could not upload image.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="profile-card">
      <div className="profile-left">
        <div className="image-box">
          {imageSrc ? (
            <img className="profile-image" src={imageSrc} alt="Profile preview" />
          ) : (
            <div className="image-placeholder">AH</div>
          )}
          <label htmlFor="profileImageUpload" className="image-upload-label">
            {imageSrc ? "Change photo" : "Upload photo"}
          </label>
        </div>

        <input
          id="profileImageUpload"
          className="image-upload-input"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          hidden
        />

        <div className="image-upload-section">
          {uploading && <p className="upload-status">Uploading image...</p>}
          {uploadError && <p className="form-error">{uploadError}</p>}
          {successMessage && <p className="upload-success">{successMessage}</p>}
        </div>

        <p className="availability"><span /> Available for opportunities</p>
      </div>

      <div className="profile-right">
        <span className="badge">EASTC Student</span>
        <h1>Ahmed Hashim Suleiman</h1>
        <p className="profession">
          Data Science Student &bull; Web Developer &bull; Data Enthusiast
        </p>
        <p className="description">
          I combine analytical thinking with modern web development to build
          polished digital solutions. My focus is on data science, secure
          systems, and elegant user experiences.
        </p>

        <div className="info-grid">
          <div className="info-card">
            <FaGraduationCap />
            <h4>Education</h4>
            <p>Data Science at EASTC</p>
          </div>
          <div className="info-card">
            <FaCode />
            <h4>Featured Work</h4>
            <p>Product Recommendation System</p>
          </div>
        </div>

        <div className="contact-buttons">
          <a href="mailto:ahmedhashimsuleiman@gmail.com">
            <FaEnvelope /> Email Me
          </a>
          <a href="https://wa.me/255776335604" target="_blank" rel="noreferrer">
            <FaWhatsapp /> WhatsApp
          </a>
          <a className="button-outline" href="https://github.com/ahmedhashimsuleiman" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
