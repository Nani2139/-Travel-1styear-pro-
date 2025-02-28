import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="container-fluid mb-5">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-home"
                      aria-hidden="true"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-file"
                      aria-hidden="true"
                    >
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                      <polyline points="13 2 13 9 20 9"></polyline>
                    </svg>
                     Bookings
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-shopping-cart"
                      aria-hidden="true"
                    >
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-users"
                      aria-hidden="true"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    Customers
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-bar-chart-2"
                      aria-hidden="true"
                    >
                      <line x1="18" y1="20" x2="18" y2="10"></line>
                      <line x1="12" y1="20" x2="12" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="14"></line>
                    </svg>
                    Reports
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-layers"
                      aria-hidden="true"
                    >
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                    Integrations
                  </NavLink>
                </li>
              </ul>

              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Saved reports</span>
                <NavLink
                  className="link-secondary"
                  to="#"
                  aria-label="Add NavLink new report"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-plus-circle"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </NavLink>
              </h6>
              <ul className="nav flex-column mb-2">
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-file-text"
                      aria-hidden="true"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    Current month
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-file-text"
                      aria-hidden="true"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    Last quarter
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-file-text"
                      aria-hidden="true"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    Social engagement
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-file-text"
                      aria-hidden="true"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    Year-end sale
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="chartjs-size-monitor">
              <div className="chartjs-size-monitor-expand">
                <div className=""></div>
              </div>
              <div className="chartjs-size-monitor-shrink">
                <div className=""></div>
              </div>
            </div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Share
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Export
                  </button>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary dropdown-toggle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-calendar"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  This week
                </button>
              </div>
            </div>

            <h2>Top 15 Best Places in World (In this Week)</h2>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">S.no</th>
                    <th scope="col">Place</th>
                    <th scope="col">Country</th>
                    <th scope="col">Ratings(out of 5)</th>
                    <th scope="col">Price for Living(per day)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0001</td>
                    <td>Rome</td>
                    <td>Italy</td>
                    <td>4</td>
                    <td>300 euro</td>
                  </tr>
                  <tr>
                    <td>0002</td>
                    <td>London</td>
                    <td>England</td>
                    <td>4.5</td>
                    <td>600 pounds</td>
                  </tr>
                  <tr>
                    <td>0003</td>
                    <td>Phuket</td>
                    <td>Thailand</td>
                    <td>4</td>
                    <td>250 Thai Bhat</td>
                  </tr>
                  <tr>
                    <td>0004</td>
                    <td>Tokyo</td>
                    <td>Japan</td>
                    <td>4</td>
                    <td>500 Yen</td>
                  </tr>
                  <tr>
                    <td>0005</td>
                    <td>Paris</td>
                    <td>France</td>
                    <td>4.2</td>
                    <td>400 Euros</td>
                  </tr>
                  <tr>
                    <td>0006</td>
                    <td>Banff</td>
                    <td>canada</td>
                    <td>3.9</td>
                    <td>350 Dollars</td>
                  </tr>
                  <tr>
                    <td>0007</td>
                    <td>Maldives</td>
                    <td>Maldives</td>
                    <td>3.8</td>
                    <td>200 Rufiyaa</td>
                  </tr>
                  <tr>
                    <td>0008</td>
                    <td>Barcelona</td>
                    <td>Spain</td>
                    <td>3.7</td>
                    <td>250 Euros</td>
                  </tr>
                  <tr>
                    <td>0009</td>
                    <td>Bali</td>
                    <td>Indonesia</td>
                    <td>3.8</td>
                    <td>150 Rupiah</td>
                  </tr>
                  <tr>
                    <td>0010</td>
                    <td>New York</td>
                    <td>USA</td>
                    <td>4</td>
                    <td>700 Dollars</td>
                  </tr>
                  <tr>
                    <td>0011</td>
                    <td>Sydney</td>
                    <td>Australia</td>
                    <td>3.9</td>
                    <td>400 Austrailian Dollars</td>
                  </tr>
                  <tr>
                    <td>0012</td>
                    <td>Machu Picchu</td>
                    <td>Peru</td>
                    <td>3.8</td>
                    <td>200 Peruvian Sol</td>
                  </tr>
                  <tr>
                    <td>0013</td>
                    <td>Dubai</td>
                    <td>UAE</td>
                    <td>4</td>
                    <td>300 Dirham</td>
                  </tr>
                  <tr>
                    <td>0014</td>
                    <td>Santorini</td>
                    <td>Greece</td>
                    <td>4</td>
                    <td>400 Euros</td>
                  </tr>
                  <tr>
                    <td>0014</td>
                    <td>Himalayans</td>
                    <td>India</td>
                    <td>4</td>
                    <td>400 Ruppes</td>
                  </tr>
                  <tr>
                    <td>0015</td>
                    <td>Argentine Patagonia</td>
                    <td>Argentina</td>
                    <td>3.9</td>
                    <td>200 Chilean Peso</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
        </div>
    );
}

export default Dashboard;