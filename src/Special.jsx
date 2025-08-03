import React, { useState } from 'react';
import './Special.css';

const departments = [
    { id: 1, name: 'Cardiology', img: '/src/assets/cardio.jpg', description: 'Cardiology deals with disorders of the heart and blood vessels, providing diagnosis and treatment of heart conditions.' },
    { id: 2, name: 'Neurology', img: '/src/assets/nuero.jpg', description: 'Neurology focuses on disorders of the nervous system, including the brain, spinal cord, and nerves.' },
    { id: 3, name: 'Orthology', img: '/src/assets/ortho.jpg', description: 'Orthology specializes in diagnosing and treating bone, joint, and muscle disorders.' },
    { id: 4, name: 'Dermatology', img: '/src/assets/derma.jpg', description: 'Dermatology focuses on the treatment of skin, hair, and nail disorders.' },
    { id: 5, name: 'Pediatrics', img: '/src/assets/pedi.jpg', description: 'Pediatrics deals with the medical care of infants, children, and adolescents.' },
    { id: 6, name: 'Gynecology', img: '/src/assets/gyno.jpg', description: 'Gynecology focuses on the health of the female reproductive systems and the breasts.' }
];

const Special = () => {
    const [active, setActive] = useState(null);

    const handleClick = (id) => {
        setActive(active === id ? null : id); // toggle open/close
    }

    return (
        <div className='main' id='specialization'>
            <h1>Specialization</h1>
            <div className="box">
                {departments.map(dep => (
                    <div className="third" key={dep.id}>
                        <img src={dep.img} alt={dep.name} />
                        <h3>{dep.name}</h3>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleClick(dep.id) }}>
                            {active === dep.id ? 'hide' : 'know more'}
                        </a>
                        {active === dep.id && (
                            <p className='description'>{dep.description}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Special;
