import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import Catalog from 'src/pages/Catalog';
import SearchResults from 'src/pages/SearchResults';

function App() {
  return (
    <Routes>
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/search-results" element={<SearchResults />} />
      <Route path="*" element={<Navigate to="/catalog" />} />
    </Routes>
  );
}

export default App;
