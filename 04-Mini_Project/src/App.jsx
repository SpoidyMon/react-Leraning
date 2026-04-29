// import React from 'react'
// import { Bookmark } from 'lucide-react';

import Card from "./Components/Card"

const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    name: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    name: "Amazon",
    datePosted: "1 week ago",
    post: "Cloud Support Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$28/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    name: "Meta",
    datePosted: "3 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$40/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    name: "Netflix",
    datePosted: "10 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    name: "Apple",
    datePosted: "4 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    name: "Spotify",
    datePosted: "6 days ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$38/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    name: "Tesla",
    datePosted: "2 days ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$30/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    name: "Adobe",
    datePosted: "8 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$48/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    name: "Uber",
    datePosted: "10 weeks ago",
    post: "Mobile App Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$42/hr",
    location: "Kolkata, India"
  }
];

const App = () => {
  return (
    <div className="parent">
      {jobOpenings.map(function (elem,idx) {
        
        return <div key={idx}>
          <Card company={elem.name} datePosted={elem.datePosted} brandLogo={elem.brandLogo} post={elem.post}
          tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}  />
        </div>
      })}
    </div>
  )
}

export default App
