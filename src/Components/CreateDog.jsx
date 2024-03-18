import React, { useState } from 'react';
import axios from 'axios';

const CreateDog = () => {
  const [dogName, setDogName] = useState('');
  const [description, setDescription] = useState('');
  const [friendList, setFriendList] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCreateDog = async () => {
    try {
      const response = await axios.post('/api/dogs', {
        dogName,
        description,
        friendList: friendList.split(',').map(item => item.trim())
      });
      setSuccessMessage(response.data.message);
      setDogName('');
      setDescription('');
      setFriendList('');
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Create a New Dog</h2>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <label>
        Dog Name:
        <input type="text" value={dogName} onChange={e => setDogName(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <br />
      <label>
        Friend List (comma separated):
        <input type="text" value={friendList} onChange={e => setFriendList(e.target.value)} />
      </label>
      <br />
      <button onClick={handleCreateDog}>Create Dog</button>
    </div>
  );
};

export default CreateDog;
