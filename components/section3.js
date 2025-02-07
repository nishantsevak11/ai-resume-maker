import React from 'react';
import {
  LandingProductTourSection,
  LandingProductTourList,
  LandingProductTourTrigger,
  LandingProductTourContent,
} from '@/components/landing/LandingProductTour';
import { VideoPlayer } from '@/components/shared/VideoPlayer';

export default function Section3() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(LandingProductTourSection, {
      titleComponent: React.createElement(
        'h2',
        { className: 'text-5xl font-semibold leading-tight' },
        'Why Choose Our ',
        React.createElement('br', null),
        'AI Resume Builder?'
      ),
      descriptionComponent: React.createElement(
        'div',
        { className: 'flex flex-col max-w-xl' },
        React.createElement(
          'p',
          { className: 'mt-4 md:text-xl' },
          'ATS-friendly resume in just a few minutes. No design skills required—just answer a few questions, and we’ll generate the perfect resume for you!'
        ),
        React.createElement(
          'p',
          { className: 'mt-4 md:text-xl opacity-50' },
          'It automatically suggests Content, flowers, based on your data\'s which help you.'
        )
      ),
      defaultValue: 'feature-1',
    },
    React.createElement(
      LandingProductTourList,
      null,
      React.createElement(
        LandingProductTourTrigger,
        { value: 'feature-1' },
        React.createElement(
          'p',
          { className: 'text-xl font-bold' },
          ' AI-Powered Resume Generation'
        ),
        React.createElement(
          'p',
          null,
          'Our advanced AI analyzes your input and generates a professional, well-structured resume tailored to your industry. '
        )
      ),
      React.createElement(
        LandingProductTourTrigger,
        { value: 'feature-2' },
        React.createElement(
          'p',
          { className: 'text-xl font-bold' },
          'Optimized for ATS & Hiring Managers '
        ),
        React.createElement(
          'p',
          null,
          'Most companies use Applicant Tracking Systems (ATS) to filter resumes before they even reach hiring managers. '
        )
      ),
      React.createElement(
        LandingProductTourTrigger,
        { value: 'feature-3' },
        React.createElement(
          'p',
          { className: 'text-xl font-bold' },
          ' Customizable & Easy to Use'
        ),
        React.createElement(
          'p',
          null,
          ' Unlike generic templates, our AI lets you edit sections, rearrange content, and add new skills or experiences with a simple, user-friendly interface. '
        )
      ),
      React.createElement(
        LandingProductTourTrigger,
        { value: 'feature-4' },
        React.createElement(
          'p',
          { className: 'text-xl font-bold' },
          'Easy editing'
        ),
        React.createElement(
          'p',
          null,
          'Simply drag and drop elements onto your garden design. All the heavy lifting is done automatically, requiring no manual work.'
        )
      )
    ),
    React.createElement(
      LandingProductTourContent,
      { value: 'feature-1' },
      React.createElement(VideoPlayer, {
        className: 'w-full rounded-md',
        src: 'https://cache.shipixen.com/features/11-pricing-page-builder.mp4',
        autoPlay: true,
        controls: false,
        loop: true,
      })
    ),
    React.createElement(
      LandingProductTourContent,
      { value: 'feature-2' },
      React.createElement(VideoPlayer, {
        className: 'w-full rounded-md',
        src: 'https://cache.shipixen.com/features/21-run-locally.mp4',
        autoPlay: true,
        controls: false,
        loop: true,
      })
    ),
    React.createElement(
      LandingProductTourContent,
      { value: 'feature-3' },
      React.createElement(VideoPlayer, {
        className: 'w-full rounded-md',
        src: 'https://cache.shipixen.com/features/22-landing-page-components.mp4',
        autoPlay: true,
        controls: false,
        loop: true,
      })
    ),
    React.createElement(
      LandingProductTourContent,
      { value: 'feature-4' },
      React.createElement(VideoPlayer, {
        className: 'w-full rounded-md',
        src: 'https://cache.shipixen.com/features/20-mobile-optimized.mp4',
        autoPlay: true,
        controls: false,
        loop: true,
      })
    )
  )
);
}
