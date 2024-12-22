import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import Pagination from './components/Pagination';
import { api_url } from './utils/constants';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  const fetchData = async () => {
    try {
      const response = await fetch(api_url);
      const result = await response.json();
      setProjects(result || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = projects.slice(indexOfFirstRecord, indexOfLastRecord);

  return (
    <main className="main-container">
      <header className="app-header">
        <h1 className="title">Kickstarter Projects</h1>
      </header>

      <section aria-labelledby="project-table">
        <Table data={currentRecords} s_no={indexOfFirstRecord} />
      </section>

      <nav aria-label="Pagination">
        <Pagination
          totalRecords={projects.length}
          recordsPerPage={recordsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </nav>
    </main>
  );
};

export default App;
