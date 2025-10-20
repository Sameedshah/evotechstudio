"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/component/ui/button";
import { Card } from "@/component/ui/card";
import { Badge } from "@/component/ui/badge";
import { Linkedin, Github, Instagram } from "lucide-react";
import BehanceIcon from "@/component/icons/BehanceIcon";

interface SocialLinks {
  linkedin?: string;
  github?: string;
  behance?: string;
  instagram?: string;
}

interface ProfileCardProps {
  name: string;
  title: string;
  handle?: string;
  status?: "Online" | "Offline" | "Away" | "Busy";
  avatarUrl: string;
  showUserInfo?: boolean;
  enableTilt?: boolean;
  enableMobileTilt?: boolean;
  description?: string;
  experience?: string;
  socialLinks?: SocialLinks;
}

const ProfileCard = ({
  name,
  title,
  handle,
  status = "Online",
  avatarUrl,
  showUserInfo = true,
  enableTilt = true,
  enableMobileTilt = false,
  description,
  experience,
  socialLinks,
}: ProfileCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const statusColors = {
    Online: "bg-green-500",
    Offline: "bg-gray-500",
    Away: "bg-yellow-500",
    Busy: "bg-red-500",
  };

  const tiltVariants = {
    rest: { rotateX: 0, rotateY: 0, scale: 1 },
    hover: {
      rotateX: enableTilt ? -5 : 0,
      rotateY: enableTilt ? 5 : 0,
      scale: 1.02,
    },
  };

  return (
    <motion.div
      variants={tiltVariants}
      initial="rest"
      whileHover="hover"
      transition={{ duration: 0.3, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ perspective: 1000 }}
      className="w-full max-w-sm mx-auto"
    >
      <Card className="overflow-hidden bg-gradient-to-br from-background to-muted/20 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
        {/* Header with Avatar */}
        <div className="relative p-6 pb-4">
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <img
                  src={avatarUrl}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              {/* Status Indicator */}
              <div className="absolute -bottom-1 -right-1">
                <div className={`w-6 h-6 rounded-full border-2 border-background ${statusColors[status]} shadow-lg`}>
                  <div className={`w-full h-full rounded-full ${statusColors[status]} animate-pulse`} />
                </div>
              </div>
            </div>

            {/* User Info */}
            {showUserInfo && (
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
                <p className="text-primary font-medium mb-2">{title}</p>
                {handle && (
                  <p className="text-sm text-muted-foreground">@{handle}</p>
                )}
                {experience && (
                  <Badge variant="secondary" className="mt-2">
                    {experience}
                  </Badge>
                )}
              </div>
            )}

            {/* Description */}
            {description && (
              <p className="text-sm text-muted-foreground text-center mb-4 line-clamp-3">
                {description}
              </p>
            )}

            {/* Status Badge */}
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-2 h-2 rounded-full ${statusColors[status]}`} />
              <span className="text-xs font-medium text-muted-foreground">{status}</span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        {socialLinks && (
          <div className="px-6 pb-6">
            <div className="flex justify-center gap-3">
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary transition-all duration-200 hover:scale-110"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary transition-all duration-200 hover:scale-110"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {socialLinks.behance && (
                <a
                  href={socialLinks.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary transition-all duration-200 hover:scale-110"
                >
                  <BehanceIcon className="w-4 h-4" />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary transition-all duration-200 hover:scale-110"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        )}

        {/* Hover Effect Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 pointer-events-none"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </Card>
    </motion.div>
  );
};

export default ProfileCard;