import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userProfileData, setUserProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/user/profile/${userId}`,
        { withCredentials: true },
      );
      console.log('User profile:', response.data);
      setUserProfileData(response.data.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
      //   navigate('/login');
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (profileData) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/user/update-profile`,
        { profileData },
        { withCredentials: true },
      );
      console.log('Profile updated successfully:', response.data);
      setUserProfileData((prev) => ({
        ...prev,
        ...profileData.personalInfo,
        ...profileData.academicInfo,
        ...profileData.jobInfo,
      }));
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error.response?.data || error);
      alert(error.response?.data?.message || 'Failed to update profile.');
    }
  };

  const createAvailability = async ({ timeZone, duration, meetingMode, schedule }) => {
    const userId = localStorage.getItem('userId'); 
    console.log("userId:",userId);
  if (!userId) {
    toast.error('User ID is missing. Please log in again.');
    return;
  }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/user/mentor/c/availability`,
        { userId, timeZone, duration, meetingMode, schedule },
        { withCredentials: true },
      );

      console.log('ca:', response);
      if (response.status === 201) {
        toast.success('Schedule set successfully');
      } else {
        toast.error('Something went wrong');
      }
    } catch (error) {
      console.log('Error while creating availability: ', error);
      toast.error('Something went wrong');
    }
  };

  return (
    <UserContext.Provider
      value={{
        userProfileData,
        updateProfile,
        loading,
        fetchUserData,
        createAvailability,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
