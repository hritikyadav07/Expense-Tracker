import React from 'react';
// import ExpenseManagerCard from './ExpenseManagerCard'; // Import the existing 
import ProjectCard from './ProjectCard';
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'


const FeaturedProjects = () => {
  const card =[
    {
      id: 1,
      title: 'Expense Manager',
      description: 'Track your expenses, income, and budgets',
      image: project1,
      link: '/expense-manager',
    },{
      id: 2,
      title: 'Project Management',
      description: 'Organize and track your projects',
      image: project2,
      link: '/project-management',
    },{
      id: 3,
      title: 'Smart Budgeting',
      description: 'Create and track budgets effortlessly',
      image: project3,
      link: '/smart-budgeting',
    }
  ];
  return (
    <section className="py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6">
        {/* Project Card */}
        {card.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}        
      </div>
    </section>
  );
};

export default FeaturedProjects;