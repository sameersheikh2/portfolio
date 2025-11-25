import { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

const ContactForm = ({ isSubmitting, onSubmit, setIsSubmitting }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const web3formsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    
    if (!web3formsKey) {
      console.error('Web3Forms access key is not configured');
      alert('Form submission is not properly configured. Please try again later.');
      setIsSubmitting(false);
      return;
    }
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: web3formsKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'New Contact Form Submission',
          from_name: 'Portfolio Contact Form',
          replyto: formData.email
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        onSubmit();
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert(error.message || 'Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fields = [
    { id: 'name', type: 'text', placeholder: 'Your name' },
    { id: 'email', type: 'email', placeholder: 'your.email@example.com' },
    { id: 'message', component: 'textarea', placeholder: 'Your message...' }
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {fields.map(({ id, type = 'text', component, placeholder }) => (
        <div key={id} className="space-y-2">
          <Label htmlFor={id}>{id.charAt(0).toUpperCase() + id.slice(1)}</Label>
          {component === 'textarea' ? (
            <Textarea
              {...{ id, name: id, required: true, value: formData[id], onChange: handleChange, placeholder }}
              rows={4}
              className="min-h-[120px] transition-all duration-200"
            />
          ) : (
            <Input
              {...{ id, name: id, type, required: true, value: formData[id], onChange: handleChange, placeholder }}
              className="transition-all duration-200"
            />
          )}
        </div>
      ))}
      
      <Button 
        type="submit"
        variant="gradient"
        size="lg"
        disabled={isSubmitting}
        className="w-full text-base font-semibold py-3 px-8 transition-all duration-300 hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98]"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          <span className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            Send Message
          </span>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
