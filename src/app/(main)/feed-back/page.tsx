"use client"
import { Metadata } from "next"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import DefaultLayout from "@modules/layout/templates"
import FeedBackTemplate from "@modules/feed-back/templates"

const FeedBack = () => {
	return (
		<DefaultLayout>
			<FeedBackTemplate/>
		</DefaultLayout>
	)
}

export default FeedBack;