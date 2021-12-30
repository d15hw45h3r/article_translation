import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { useTranslation } from 'react-i18next';

import Article from './components/Article';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  const { t, i18n } = useTranslation();
  const [fetchedNumber, setFetchedNumber] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState('');

  useEffect(() => {
    const fetchDate = async () => {
      const response = await axios.get('https://api.opensensemap.org/stats');
      setFetchedNumber(response.data[0]);
    };

    fetchDate();
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
    setEditedText('');
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
    setEditedText(t('content'));
  };

  const handleEditField = (e) => {
    setEditedText(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setEditedText(editedText);
    setIsEditing(false);
  };

  return (
    <div className='container'>
      <LanguageSwitcher handleLanguageChange={handleLanguageChange} disabled={isEditing} />
      <Article
        handleEdit={handleEdit}
        edit={isEditing}
        handleEditField={handleEditField}
        handleUpdate={handleUpdate}
        value={editedText}
        fetchedNumber={fetchedNumber}
      />
    </div>
  );
}

export default App;
