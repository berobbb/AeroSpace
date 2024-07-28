import React, { useState } from 'react';

export function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && review) {
      setReviews([...reviews, { name, review }]);
      setName('');
      setReview('');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-left border-b-2 border-gray-200 hover:scale-105 transition ease-in-out duration-300" >Submit Your Reviws</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2 text-left">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="review" className="block text-gray-700 font-bold mb-2 text-left">
            Your Thoughts
          </label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Share your thoughts on aerospace"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">{review.name}</h2>
            <p className="text-gray-700">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
