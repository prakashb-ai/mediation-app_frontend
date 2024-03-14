import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const CreateUserComponent = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  const createUser = () => {
    // Create the object with the required fields
    const newUser = {
      name: name,
      gender: gender,
      bio: bio,
      dob: dob
    };

    // Send POST request to the API endpoint
    fetch('http://localhost:8000/api/post/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to create user');
      }
      return response.json();
    })
    .then(data => {
      // Handle successful response
      console.log('User created successfully:', data);
      Alert.alert('Success', 'User created successfully');
      // Reset input fields after successful submission
      setName('');
      setGender('');
      setBio('');
      setDob('');
    })
    .catch(error => {
      // Handle error
      console.error('Error creating user:', error);
      Alert.alert('Error', 'Failed to create user');
    });
  };

  return (
    <View>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Gender"
        value={gender}
        onChangeText={text => setGender(text)}
      />
      <TextInput
        placeholder="Bio"
        value={bio}
        onChangeText={text => setBio(text)}
      />
      <TextInput
        placeholder="Date of Birth"
        value={dob}
        onChangeText={text => setDob(text)}
      />
      <Button
        title="Create User"
        onPress={createUser}
      />
    </View>
  );
};

export default CreateUserComponent;