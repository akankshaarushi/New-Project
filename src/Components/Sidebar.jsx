import React from 'react';
import Popup from 'reactjs-popup';
import '../Style/Sidebar.css';
import TimelineIcon from '@mui/icons-material/Timeline';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ApartmentIcon from '@mui/icons-material/Apartment';

const Sidebar = () => {
  return (
    <div className="partition">
      <div className="menu">
        <div className="menu_items">
          <h5>WSTF FRONT-END HACKATHON</h5>
          <div className="detailss">
          <h3>All users</h3>
          <span>Details</span>
          </div>
          <h1 className='head_heading'>2,431,340</h1>
          <div className='sales_details'>
            <div className="sales_details1">
            <div className="totalEarning">
            <TimelineIcon/>
            </div>
            <div className="totals">
            <p>Total Earning</p>
            <span>540,549</span>
            </div>
            </div>
            <div className="sales_details2">
            <div className="sales">
              <DataSaverOnIcon/>
              </div>
              <div className="totals">
              <p>Sales</p>
            <span>1,205,677</span>
            </div>
            </div>
            <div className="sales_details2">
            <div className="purchase">
              < EqualizerIcon />
              </div>
              <div className="totals">
              <p>Purchase</p>
            <span>48,430,039</span>
            </div>
            </div>
          </div>
        </div>
      </div>
      <section>
          <div className="containing">
            <div className="chicago">
              <p><LocationCityIcon/>chicago</p>
              <span>980,3890</span>
            </div>
            <div className="Berlin">
            <p><ApartmentIcon/>Berlin</p>
              <span>980,3000</span>
            </div>
            <div className="Singapore">
            <p><LocationCityIcon/>Singapore</p>
              <span>880,4890</span>
            </div>
            <div className="Quatar">
            <p><ApartmentIcon/>Quatar</p>
              <span>780,3890</span>
            </div>
            <div className="Morocco">
            <p><LocationCityIcon/>Morocco</p>
            <span>680,6890</span>
            </div>
            <div className="Australia">
            <p><ApartmentIcon/>Australia</p>
              <span>680,3890</span>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Sidebar;