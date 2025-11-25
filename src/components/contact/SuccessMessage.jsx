import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const SuccessMessage = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="p-6 rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900/50"
  >
    <div className="flex items-center gap-3">
      <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
      <h3 className="text-lg font-medium text-green-800 dark:text-green-200">
        Message Sent Successfully!
      </h3>
    </div>
    <p className="mt-2 text-sm text-green-700 dark:text-green-300">
      Thank you for reaching out. I'll get back to you as soon as possible.
    </p>
  </motion.div>
);

export default SuccessMessage;
