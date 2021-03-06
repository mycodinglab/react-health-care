import React from 'react';
import useDepartments from '../../hooks/useDepartments';
import Department from '../Department/Department';

const Departments = () => {
    const [department] = useDepartments();
    return (
        <div>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 p-3 container mx-auto'>
                {
                    department.map(department => <Department
                        key={department.id}
                        department={department}
                    ></Department>)
                }
            </div>
        </div>
    );
};

export default Departments;