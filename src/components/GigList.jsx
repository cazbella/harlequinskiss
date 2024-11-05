import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import './GigList.css';

const GigList = () => {
  const [gigs, setGigs] = useState([]);

  useEffect(() => {
    const fetchGigs = async () => {
      const gigCollection = collection(db, 'gigs');
      const gigSnapshot = await getDocs(gigCollection);
      const gigList = gigSnapshot.docs.map(doc => doc.data());
      setGigs(gigList);
    };
    fetchGigs();
  }, []);

  return (
    <section className="gigs-section" id="gigs">
      <div className="container">
        <h2>Upcoming Gigs</h2>
        <ul className="gig-list">
          {gigs.map((gig, index) => (
            <li key={index} className="gig-item">
              <span>{gig.date}</span> - {gig.venue} ({gig.location})
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GigList;