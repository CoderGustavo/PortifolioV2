import React, {useState, useEffect} from 'react';
import Head from '@/components/infra/head'
import Header from '@/components/reusables/header'
import {Slide as SlideMain} from '@/components/patterns/slideMain';
import { Container } from '@mui/material';

import Services from '@/components/patterns/services';
import Contact from '@/components/reusables/contact';
import TimelineSection from '@/components/reusables/timeline';

export default function Home(props) {

	return (
		<>
			<Head />
			<Header />
			<section>
				<SlideMain />
			</section>
			<section>
				<Container maxWidth="xl">
					<TimelineSection />
					<Services />
				</Container>
			</section>
			<Contact />
		</>
	)
}