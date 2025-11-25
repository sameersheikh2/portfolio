import { useState } from 'react';
import { BlurFade } from '../../components/ui/blur-fade';
import { Badge } from "../../components/ui/badge";
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';
import SuccessMessage from './contact/SuccessMessage';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 scroll-mt-16">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={0.04 * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                <Badge className="text-sm m-1 dark:bg-white bg-black text-white dark:text-black hover:bg-gray-200" variant="secondary">
                  Contact
                </Badge>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a project in mind or want to say hello? Feel free to reach out!
              </p>
            </div>
          </div>
        </BlurFade>

        <div className="grid gap-8 md:grid-cols-2 mt-12">
          <div className="space-y-6">
            {isSubmitted ? <SuccessMessage /> : <ContactForm isSubmitting={isSubmitting} onSubmit={handleSubmit} setIsSubmitting={setIsSubmitting} />}
          </div>
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
