import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';


const NotFound = () => {
    return (
        <div className='min-h-screen' style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link href="/"><Button className='bg-[#3C72BE]'>Go to Home</Button></Link>
        </div>
    );
}

export default NotFound;