import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Status from './Category/Status';
import Species from './Category/Species';
import Gender from './Category/Gender';
import Box from '@mui/system/Box';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import { useNavigate } from 'react-router-dom';

const Filters = (props) => {
  const { setStatus, setSpecies, setGender, setPageNumber } = props;

  const [queryParams] = useSearchParams();

  const [expandedStatus, setExpandedStatus] = useState(
    queryParams.get('statusFilter') !== null &&
      queryParams.get('statusFilter') !== ''
  );

  const handleExpandedStatus = () => {
    setExpandedStatus(!expandedStatus);
  };

  const [expandedSpecies, setExpandedSpecies] = useState(
    queryParams.get('speciesFilter') !== null &&
      queryParams.get('speciesFilter') !== ''
  );

  const handleExpandedSpecies = () => {
    setExpandedSpecies(!expandedSpecies);
  };

  const [expandedGender, setExpandedGender] = useState(
    queryParams.get('genderFilter') !== null &&
      queryParams.get('genderFilter') !== ''
  );

  const handleExpandedGender = () => {
    setExpandedGender(!expandedGender);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    setStatus('');
    setSpecies('');
    setGender('');
    setPageNumber('');
    setExpandedStatus(false);
    setExpandedSpecies(false);
    setExpandedGender(false);
    localStorage.removeItem('Status');
    localStorage.removeItem('Species');
    localStorage.removeItem('Gender');
    navigate('/characters/pages/1');
  };

  return (
    <Box sx={{ textAlign: 'center', fontWeight: 'bold' }}>
      <Box
        sx={{
          backgroundColor: '#c0c0c0',
          padding: '10px',
          fontSize: '18px',
          marginBottom: '10px',
          borderTopLeftRadius: '5px',
          borderTopRightRadius: '5px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <FilterAltIcon fontSize="medium" sx={{ marginRight: '3px' }} />
        Filters
      </Box>
      <Box>
        <Status
          expandedStatus={expandedStatus}
          handleExpandedStatus={handleExpandedStatus}
          setStatus={setStatus}
          setPageNumber={setPageNumber}
        />
        <Species
          expandedSpecies={expandedSpecies}
          handleExpandedSpecies={handleExpandedSpecies}
          setSpecies={setSpecies}
          setPageNumber={setPageNumber}
        />
        <Gender
          expandedGender={expandedGender}
          handleExpandedGender={handleExpandedGender}
          setGender={setGender}
          setPageNumber={setPageNumber}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: '#c0c0c0',
          padding: '10px',
          fontSize: '16px',
          marginTop: '10px',
          borderBottomLeftRadius: '5px',
          borderBottomRightRadius: '5px',
        }}
      >
        <Box
          component="span"
          onClick={handleClick}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            fontWeight: 'normal',
            textDecoration: 'underline',
            cursor: 'pointer',
            '&:hover': {
              color: '#8c1aff',
            },
          }}
        >
          <FilterAltOffIcon fontSize="medium" sx={{ marginRight: '3px' }} />
          Clear filters
        </Box>
      </Box>
    </Box>
  );
};

export default Filters;
