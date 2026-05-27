import React from "react";
import Image from "next/image";

export interface PlayerProfileProps {
  name: string;
  number: number;
  position?: string;
  photo?: string;
  profile?: string;
  poster?: string;
}

const PlayerProfile: React.FC<PlayerProfileProps> = ({ name, number, position, photo, profile, poster }) => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-200 max-h-[90vh] overflow-y-auto">
      <div className="flex items-center gap-5">
        {photo && (
          <Image src={photo} alt={name} width={96} height={96} className="rounded-full object-cover border border-gray-300" />
        )}
        <div>
          <div className="text-2xl font-bold text-brand-dark">{name}</div>
          <div className="text-sm text-gray-500 mt-1">Số áo: {number}</div>
          {position && <div className="text-sm text-gray-500">{position}</div>}
        </div>
      </div>
      {profile && (
        <div className="mt-4 text-gray-700 leading-relaxed whitespace-pre-line">{profile}</div>
      )}
      {poster && (
        <div className="mt-5 rounded-lg overflow-hidden border border-gray-200">
          <Image src={poster} alt={`Poster ${name}`} width={800} height={1000} className="w-full h-auto object-contain" />
        </div>
      )}
    </div>
  );
};

export default PlayerProfile;
