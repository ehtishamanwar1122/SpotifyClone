
import React from 'react';

interface CategoryCardProps {
  name: string;
  color: string;
  imageUrl: string;
}

const CategoryCard = ({ name, color, imageUrl }: CategoryCardProps) => {
  return (
    <div className={`relative h-52 rounded-lg overflow-hidden bg-gradient-to-br ${color} to-slate-900 cursor-pointer hover:scale-[1.02] transition-transform`}>
      <img 
        src={imageUrl}
        alt={name}
        className="absolute right-0 bottom-0 h-28 w-28 transform rotate-25 translate-x-4 translate-y-4 opacity-80"
      />
      <div className="p-4 absolute inset-0">
        <h3 className="text-white text-2xl font-bold">{name}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
