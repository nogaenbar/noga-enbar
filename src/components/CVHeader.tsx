import { Mail, ExternalLink, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import { cvData } from "../data/cv-data";

interface CVHeaderProps {
  data: typeof cvData['personal'];
}

export function CVHeader({ data }: CVHeaderProps) {
  return (
    <div className="space-y-8 animate-fadeInUp">
      {/* Profile Section */}
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="relative">
          <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-purple-100 shadow-2xl">
            <img 
              src={data.image}
              alt={data.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-xl">✨</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{data.name}</h1>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            <p className="text-2xl font-semibold">{data.title}</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center max-w-lg">
          I am deeply interested in what we love and value, and how design can improve our lives.
        </p>
        <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-center max-w-lg">
          I am a versatile Product Designer with illustration skills and front-end coding knowledge, <span className="font-medium text-purple-600">passionate about</span> human-focused designs. My experience spans startups, NGOs, and tech for good sectors. Passionate about human behavior, I apply diverse approaches to enhance user experiences.
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

      {/* Contact Information */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4">
          <ContactItem
            icon={<Mail className="w-5 h-5 text-purple-500" />}
            label="Email"
            value={data.contact.email}
            href={`mailto:${data.contact.email}`}
          />
          
          <ContactItem
            icon={<Phone className="w-5 h-5 text-purple-500" />}
            label="Phone"
            value={data.contact.phone}
            href={`tel:${data.contact.phone}`}
          />
          
          <ContactItem
            icon={<MapPin className="w-5 h-5 text-purple-500" />}
            label="Address"
            value={data.contact.address}
          />
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Socials</h3>
          <div className="space-y-4">
            <SocialLink
              icon={<Linkedin className="w-5 h-5 text-blue-600" />}
              platform="LinkedIn"
              handle={data.socials.linkedin.handle}
              href={data.socials.linkedin.url}
              bgColor="bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30"
            />
            
            <SocialLink
              icon={<Instagram className="w-5 h-5 text-pink-600" />}
              platform="Instagram"
              handle={data.socials.instagram.handle}
              href={data.socials.instagram.url}
              bgColor="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 hover:from-pink-100 hover:to-purple-100 dark:hover:from-pink-900/30 dark:hover:to-purple-900/30"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

function ContactItem({ icon, label, value, href }: ContactItemProps) {
  const content = (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-all duration-200 group">
      <div className="flex-shrink-0 w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
        <p className="font-medium text-gray-900 dark:text-gray-100 truncate">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block hover:scale-[1.02] transition-transform"
    >
      {content}
    </a>
  ) : (
    <div className="hover:scale-[1.02] transition-transform">
      {content}
    </div>
  );
}

interface SocialLinkProps {
  icon: React.ReactNode;
  platform: string;
  handle: string;
  href: string;
  bgColor: string;
}

function SocialLink({ icon, platform, handle, href, bgColor }: SocialLinkProps) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-4 p-4 rounded-xl ${bgColor} transition-all duration-200 hover:scale-[1.02] hover:shadow-md group cursor-pointer`}
    >
      <div className="flex-shrink-0 w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-500 dark:text-gray-400">{platform}</p>
        <p className="font-medium text-gray-900 dark:text-gray-100">{handle}</p>
      </div>
      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors opacity-0 group-hover:opacity-100" />
    </a>
  );
}