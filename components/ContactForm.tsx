'use client';

import { useState } from 'react';

interface ContactFormProps {
  type: 'retreat' | 'general';
}

export default function ContactForm({ type }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    ...(type === 'retreat' && { guestCount: '', dates: '' }),
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build mailto link
    const subject = type === 'retreat'
      ? `Retreat Inquiry from ${formData.name}`
      : `Message from ${formData.name}`;

    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n${
      type === 'retreat'
        ? `Guests: ${formData.guestCount}\nDates: ${formData.dates}\n`
        : ''
    }\nMessage:\n${formData.message}`;

    window.location.href = `mailto:info@hlam.hr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-sage/30 rounded-lg focus:outline-none focus:border-sage bg-white"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-sage/30 rounded-lg focus:outline-none focus:border-sage bg-white"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-sage/30 rounded-lg focus:outline-none focus:border-sage bg-white"
            placeholder="+385..."
          />
        </div>
        {type === 'retreat' && (
          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">Number of Guests</label>
            <input
              type="text"
              name="guestCount"
              value={formData.guestCount}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-sage/30 rounded-lg focus:outline-none focus:border-sage bg-white"
              placeholder="e.g., 8-12 people"
            />
          </div>
        )}
      </div>

      {type === 'retreat' && (
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">Preferred Dates</label>
          <input
            type="text"
            name="dates"
            value={formData.dates}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-sage/30 rounded-lg focus:outline-none focus:border-sage bg-white"
            placeholder="e.g., July 15-22, 2026"
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-charcoal mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-sage/30 rounded-lg focus:outline-none focus:border-sage bg-white resize-none"
          placeholder="Tell us about your vision for this retreat..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-sage text-white py-3 rounded-lg font-medium hover:bg-sage/90 transition"
      >
        {submitted ? '✓ Email client opened' : 'Send Inquiry'}
      </button>
    </form>
  );
}
