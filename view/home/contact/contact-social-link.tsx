import { personalData } from "@/lib/data/personal-data";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export function ContactSocialLink() {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-muted/25 p-6 shadow-sm sm:p-8">
      <h3 className="text-xl font-bold text-foreground mb-2">Connect with me</h3>
      <div className="flex items-center gap-4">
        {personalData.social_usernames.github && (
          <a
            href={personalData.social_usernames.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all hover:bg-foreground hover:text-background"
          >
            <FaGithub className="h-6 w-6" />
          </a>
        )}
        
        {personalData.social_usernames.linkedIn && (
          <a
            href={personalData.social_usernames.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all hover:bg-[#0077b5] hover:text-white"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
        )}
        
        {personalData.social_usernames.facebook && (
          <a
            href={personalData.social_usernames.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all hover:bg-[#1877F2] hover:text-white"
          >
            <FaFacebook className="h-6 w-6" />
          </a>
        )}
      </div>
    </div>
  );
}
