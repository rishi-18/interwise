import React from 'react'
import dayjs from 'dayjs'
import Image from 'next/image'
import {Button} from './ui/button'
import Link from 'next/link'
import { cn,getRandomInterviewCover } from '@/lib/utils'
import DisplayTechIcons from './DisplayTechIcons'

const InterviewCard = ({interviewId, userId, role, type, techstack, createdAt}: InterviewCardProps) => {
    const feedback = null as Feedback | null
    const normalizedType = /mix/gi.test(type) ? "Mixed" : type
    const formattedDate = dayjs(
        feedback?.createdAt || createdAt || Date.now()
      ).format("MMM D, YYYY");
  return (
    <div className='card-border w-[360px] max-sm:w-full min-h-96'>
      <div className='card-interview'>
        <div>
            <div className='absolute top-0 right-0 px-4 py-2 border-light-600 w-fit rounded-bl-lg'>
                <p className='badge-text'>{normalizedType}</p>
            </div>
            <Image src={getRandomInterviewCover()} alt="Interview Cover" width={90} height={90} className="rounded-full object-fit size-[90px]" />

            <h3 className='mt-5 capitalize'>{role} Interview</h3>

            <div className="flex flex-row gap-5 mt-3">
                <div className="flex flex-row gap-2">
                    <Image src="/calendar.svg" alt='calender image' width={22} height={22}/>
                    <p>{formattedDate}</p>
                </div>

                <div className="flex flex-row gap-2 items-center">
                    <Image src="/star.svg" alt='image'height={22} width={22} />
                    <p>{feedback?.totalScore || '==='}/100</p>
                </div>
            </div>
            <p className='mt-5 LineClamp-2'>
                {feedback?.finalAssessment || "Haven't taken the assessment yet"}
            </p>
        </div>
        <div className="flex flex-row justify-between">
        <DisplayTechIcons techStack={techstack} />
            {/* <DisplayTechIcons techStack={techstack}/> */}
            <Button className="btn-primary"><Link href={feedback?`/interview/${interviewId}/feedback`:`interview/${interviewId}`}/>
                {feedback ? "View Feedback" : "Start Interview"}
            </Button>
            
        </div>
      </div> 
    </div>
  )
}

export default InterviewCard
