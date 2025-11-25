import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => (
  <div className="space-y-6">
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Contact Information</h3>
      <p className="text-muted-foreground">
        Feel free to get in touch with me. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
      </p>
      
      <div className="space-y-4 mt-8">
        <ContactInfoItem 
          icon={<Mail className="h-5 w-5 text-primary" />}
          title="Email me at"
          content="sameersheikh819@gmail.com"
          href="mailto:sameersheikh819@gmail.com"
        />
        
        <ContactInfoItem 
          icon={<MapPin className="h-5 w-5 text-primary" />}
          title="Location"
          content="India"
        />
      </div>
    </div>
  </div>
);

const ContactInfoItem = ({ icon, title, content, href }) => (
  <div className="flex items-start gap-4">
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
      {icon}
    </div>
    <div>
      <p className="text-sm text-muted-foreground">{title}</p>
      {href ? (
        <a href={href} className="text-foreground hover:underline">
          {content}
        </a>
      ) : (
        <p className="text-foreground">{content}</p>
      )}
    </div>
  </div>
);

export default ContactInfo;
