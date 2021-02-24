import React, { useState } from 'react';

import Card from '../components/Card';
import Modal from '../components/Modal';
import Loading from '../components/Loading';
import Pagination from '../components/Pagination'

const Homepage = (props) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [clickedAvatar, setClickedAvatar] = useState('');

  const { employees, isLoading, itemsPerPage, totalItems, paginate } = props;

  const toggleModal = () => {
    setIsModalShown(!isModalShown);
  };

  const handleClick = ({ target }) => {
    const id = target.id
    toggleModal();
    const selected = employees.filter(employee => (employee.uuid === id))
    setClickedAvatar(selected);
  }


  return (
    <section className="w-screen flex flex-col items-center">
      {
        isLoading ? <Loading /> : employees.map(employee => (
          <Card 
            key={employee.uuid}
            id={employee.uuid}
            avatar={employee.avatar}
            name={employee.name}
            title={employee.title}
            company={employee.company}
            bio={employee.bio}
            handleClick={handleClick}
          />
        ))
      }

      {
        !!totalItems && 
        <Pagination 
          itemsPerPage={itemsPerPage} 
          totalItems={totalItems} 
          paginate={paginate} 
        />
      }

      <Modal 
        toggleModal={toggleModal} 
        isModalShown={isModalShown}
        avatar={clickedAvatar}
      />
    </section>
  );
};

export default Homepage;
