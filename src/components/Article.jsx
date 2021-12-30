import React from 'react';
import { Trans, withTranslation } from 'react-i18next';

const Article = ({ t, handleEdit, edit, handleUpdate, handleEditField, value, currentDate }) => {
  console.log(currentDate);
  return (
    <div>
      <div className='article'>
        <h2>
          <Trans i18nKey={'title'}>
            Micro Frontends in Action: Architecture and Integration Approaches
            <span className='date'>{{ currentDate }}</span>
          </Trans>
        </h2>
        {edit ? (
          <div className='content-edit'>
            <textarea value={value} onChange={handleEditField} className='edit-field' />
            <div className='content-buttons'>
              <button className='btn' onClick={handleUpdate}>
                Update
              </button>
              <button className='btn btn-cancel' onClick={handleEdit}>
                Cancel
              </button>
            </div>
          </div>
        ) : value.length > 0 ? (
          <p>{value}</p>
        ) : (
          <p>{t('content')}</p>
        )}

        {edit ? null : (
          <button className='btn btn-edit' onClick={handleEdit}>
            Edit
          </button>
        )}

        <a href='https://mahipal-nehra.medium.com/micro-frontends-in-action-architecture-and-integration-approaches-411e1e3b66b6'>
          {t('source')}
        </a>
      </div>
    </div>
  );
};

export default withTranslation()(Article);
