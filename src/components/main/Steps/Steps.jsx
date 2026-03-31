import React from 'react';
import StepCard from './StepCard';
import user from '../../../assets/user.png'
import product from '../../../assets/package.png'

const Steps = () => {
    return (
        <div className='container mx-auto text-center p-4 space-y-4 mb-10'>
            <div className='space-y-2'>
                <h2 className="text-3xl md:text-5xl font-semibold">Get Started In 3 Steps</h2>
                <p>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid md:grid-cols-3 gap-4'>
                <StepCard i={1} img={user} title={"Create Account"} des={"Sign up for free in seconds. No credit card required to get started."}></StepCard>
                <StepCard i={2} img={product} title={"Choose Products"} des={"Browse our catalog and select the tools that fit your needs."}></StepCard>
                <StepCard i={3} img={product} title={"Start Creating"} des={"Download and start using your premium tools immediately."}></StepCard>
            </div>
        </div>
    );
};

export default Steps;