import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-thin mt-14">
      <h1 className="text-3xl font-thin mt-10 text-center text-gray-800 mb-6">About Us</h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-thin text-gray-700 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            At <strong className="text-gray-800">DressUp</strong>, our mission is to empower individuals through fashion. We believe that clothing is not just about covering up, but about expressing yourself and feeling confident in your own skin. Our goal is to provide high-quality, stylish clothing that helps you feel and look your best.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-thin text-gray-700 mb-4">Our Values</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Quality: We are committed to using the best materials and craftsmanship.</li>
            <li>Sustainability: We strive to reduce our environmental impact through sustainable practices.</li>
            <li>Inclusivity: Our designs are created to suit all shapes, sizes, and styles.</li>
            <li>Customer Focus: We aim to provide exceptional service and a personalized shopping experience.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-thin text-gray-700 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Founded in 2020, <strong className="text-gray-800">DressUp</strong> started as a small boutique with a vision to revolutionize the fashion industry. What began as a passion project has grown into a thriving brand known for its innovative designs and commitment to customer satisfaction. Our team is dedicated to bringing you the latest trends and timeless classics that make every outfit special.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs