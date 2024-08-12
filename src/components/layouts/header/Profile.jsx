import React from 'react'

const Profile = () => {
  return (
    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
    <li className="dropdown-header">
      <h6>Bongomin Erick Juma</h6>
      <span>Web Designer</span>
    </li>
    <li>
      <hr className="dropdown-divider" />
    </li>

    <li>
      <a
        className="dropdown-item d-flex align-items-center"
        href="users-profile.html"
      >
        <i className="bi bi-person"></i>
        <span>My Profile</span>
      </a>
    </li>
    <li>
      <hr className="dropdown-divider" />
    </li>

    <li>
      <a
        className="dropdown-item d-flex align-items-center"
        href="users-profile.html"
      >
        <i className="bi bi-gear"></i>
        <span>Account Settings</span>
      </a>
    </li>
    <li>
      <hr className="dropdown-divider" />
    </li>

    <li>
      <a
        className="dropdown-item d-flex align-items-center"
        href="pages-faq.html"
      >
        <i className="bi bi-question-circle"></i>
        <span>Need Help?</span>
      </a>
    </li>
    <li>
      <hr className="dropdown-divider" />
    </li>

    <li>
      <a className="dropdown-item d-flex align-items-center" href="#">
        <i className="bi bi-box-arrow-right"></i>
        <span>Sign Out</span>
      </a>
    </li>
  </ul>
  )
}

export default Profile
