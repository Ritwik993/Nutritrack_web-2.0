import React, { useState, useEffect } from 'react';
import './WaterIntake.css';
import axios from 'axios';

const WaterIntake = () => {
  const [ageRange, setAgeRange] = useState('');
  const [intakeRecommendation, setIntakeRecommendation] = useState('75% of the human brain is water and 75% of a living tree is water. A person can live about a month without food, but only about a week without water.');
  const [totalIntake, setTotalIntake] = useState(0);
  const [remainingIntake, setRemainingIntake] = useState(0);
  const [waterDrank, setWaterDrank] = useState('');
  const [error, setError] = useState('');
  const [recommendations, setRecommendations] = useState('');

  useEffect(() => {
    // Scroll to the top of the page when component mounts
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = async () => {
    const response = await axios.get("http://localhost:8082/getAllWaterIntakeDetails");
    setRecommendations(response.data);
  }

  const handleAgeRangeChange = (e) => {
    setAgeRange(e.target.value);
    // Clear intake recommendation and total intake when age range changes
    setIntakeRecommendation('');
    setRemainingIntake(0);
    setTotalIntake(0);
    setWaterDrank('');
    setError('');
  };

  const handleWaterDrankChange = (e) => {
    setWaterDrank(e.target.value);
    setError('');
  };

  const handleIntakeUpdate = () => {
    if (!ageRange.trim()) {
      setError('Please select an age range.');
      return;
    }

    if (!waterDrank.trim()) {
      setError('Please enter the amount of water drank.');
      return;
    }

    if (isNaN(waterDrank) || parseInt(waterDrank) <= 0) {
      setError('Please enter a valid number for the amount of water drank.');
      return;
    }

    const ml = parseInt(waterDrank);
    const newTotalIntake = totalIntake + ml;
    setTotalIntake(newTotalIntake);

    const recommendation = recommendations.find(
      (recommendation) => recommendation.ageRange === ageRange
    );

    if (recommendation) {
      const [minIntake, maxIntake] = recommendation.intake.split('-').map(str => parseInt(str));
      const newRemainingIntake = minIntake - newTotalIntake;

      setRemainingIntake(newRemainingIntake);
      if (newRemainingIntake > 0) {
        setIntakeRecommendation(
          <>
            You need to drink between {minIntake} to {maxIntake} ml/day.
            <br />
            <p className='water-yet'>Remaining minimum intake: {newRemainingIntake} ml.</p>
          </>
        );
      } else {
        setIntakeRecommendation(
          <>
            You need to drink between {minIntake} to {maxIntake} ml/day.
            <br />
            <p className='water-done'>You've reached the minimum intake of {minIntake} ml/day.</p>
          </>
        );
      }
    } else {
      setIntakeRecommendation('Recommendation not found');
    }

    setWaterDrank('');
  };

  return (
    <div className='water-main'>
      <h1 className='water-h1'>Water Intake Calculator</h1><br />
      <div className="form-group">
        <label className='age-range'>
          Age Range:
          <select className='select-age' value={ageRange} onChange={handleAgeRangeChange}>
            <option className='op-age' value="">Select Age Range</option>
            <option className='op-age' value="0-6 months">0-6 months</option>
            <option className='op-age' value="7-12 months">7-12 months</option>
            <option className='op-age' value="1-3 years">1-3 years</option>
            <option className='op-age' value="4-8 years">4-8 years</option>
            <option className='op-age' value="9-13 years">9-13 years</option>
            <option className='op-age' value="14-18 years (boys)">14-18 years (boys)</option>
            <option className='op-age' value="14-18 years (girls)">14-18 years (girls)</option>
            <option className='op-age' value="19-30 years (men)">19-30 years (men)</option>
            <option className='op-age' value="19-30 years (women)">19-30 years (women)</option>
            <option className='op-age' value="31-50 years (men)">31-50 years (men)</option>
            <option className='op-age' value="31-50 years (women)">31-50 years (women)</option>
            <option className='op-age' value="51-70 years (men)">51-70 years (men)</option>
            <option className='op-age' value="51-70 years (women)">51-70 years (women)</option>
            <option className='op-age' value="71+ years (men)">71+ years (men)</option>
            <option className='op-age' value="71+ years (women)">71+ years (women)</option>
            <option className='op-age' value="Pregnant (14-18 years)">Pregnant (14-18 years)</option>
            <option className='op-age' value="Pregnant (19-30 years)">Pregnant (19-30 years)</option>
            <option className='op-age' value="Pregnant (31-50 years)">Pregnant (31-50 years)</option>
            <option className='op-age' value="Breastfeeding (14-18 years)">Breastfeeding (14-18 years)</option>
            <option className='op-age' value="Breastfeeding (19-30 years)">Breastfeeding (19-30 years)</option>
            <option className='op-age' value="Breastfeeding (31-50 years)">Breastfeeding (31-50 years)</option>
          </select>
        </label>
        <br /><br />
        <label className='water-drank'>
          Water Drank (ml):
          <input 
            type="text" 
            value={waterDrank} 
            onChange={handleWaterDrankChange} 
            placeholder="Enter amount in ml"
          />
        </label>
        <br /><br />
        <button className='water-btn' onClick={handleIntakeUpdate}>Update Intake</button>
      </div>
      {error && <center><h5 className="error">{error}</h5></center>}
      <div className="mt-3">
        <p className='intakerec'>Intake Recommendation:<br /> {intakeRecommendation}</p>
        <p className='totintake'>Total Intake: {totalIntake} ml</p>
      </div>
    </div>
  );
};

export default WaterIntake;
