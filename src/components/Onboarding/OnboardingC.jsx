import React from 'react'
import '../Onboarding/Onboarding.css'
import smart from '../../assets/smart.png'
import auto from '../../assets/auto.png'
import skill from '../../assets/skill.png'
import interview from '../../assets/interview.png'


const OnboardingC = ({ step }) => {

    const data = [
        {
            pic: smart,
            header: 'Smart Resume Optimizer',
            list: [
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            ]
        },
        {
            pic: auto,
            header: 'Auto Apply',
            list: [
                'Auto apply is a good function.',
                'Auto apply is a good function.',
                'Auto apply is a good function.'
            ]
        },
        {
            pic: skill,
            header: 'Skill Assessment',
            list: [
                'Will assess your skills.',
                'Will assess your skills.',
                'Will assess your skills.'
            ]
        },
        {
            pic: interview,
            header: 'Interview Prep',
            list: [
                'Best part, it preps you for interview.',
                'Best part, it preps you for interview.',
                'Best part, it preps you for interview.'
            ]
        }
    ]

    return (
        <div className='art'>
            <div className="mt-3">
                <img src={data[step - 1].pic} alt="" className='img-fluid' />
            </div>
            <h5 className='mt-4'>{data[step - 1].header}</h5>
            <ul >
                {(data[step - 1].list).map((item, index) => 
                <li className='mt-1' key={index}>{item}</li>
                )}
            </ul>
        </div>
    )
}

export default OnboardingC
