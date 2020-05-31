import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, handleClick, children }) => {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <h1>Welcome every one to my personal page</h1>
      </div>
      <div className='row'>
        <div className='col'>
          <img
            className='rounded mx-auto d-block'
            src={children}
            alt='profile'
          />
        </div>
      </div>
      <div className='row'>
        <h2>{fullName}</h2>
      </div>
      <div className='row'>
        <h2>{profession}</h2>
      </div>
      <div className='row'>
        <p>{bio}</p>
      </div>
      <div className='row'>
        <button className='btn button-outline' onClick={handleClick}>
          Click me!
        </button>
      </div>
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
Profile.defaultProps = {
  fullName: 'Jane Doe',
  profession: `Web designer`,
  bio: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum animi nihil, quaerat, pariatur quod accusantium explicabo tempore veniam deserunt minus itaque ipsum similique laboriosam rerum totam id, dolorem facilis mollitia.`,
};

export default Profile;
