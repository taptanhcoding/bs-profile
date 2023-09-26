import React from 'react'
import PageLayout from '../layouts/pageLayout'
import {DiNodejs} from 'react-icons/di'
import {SiExpress,SiNestjs} from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'
import {TbBrandNextjs,TbBrandVite} from 'react-icons/tb'
import BoxSummon from '../../boxSummon'

export function Skill() {
  return (
    <PageLayout description='MY SPECIALTY' title='MY SKILLSThe technologies I use:'>
        <div className='flex flex-row flex-wrap'>
            <BoxSummon icon={<DiNodejs/>} title="NodeJs"/>
            <BoxSummon icon={<SiExpress/>} title="ExpressJs" color="#6388ab"/>
            <BoxSummon icon={<SiNestjs/>} title="NestJs" color="#e0234f"/>
            <BoxSummon icon={<GrReactjs/>} title="ReactJs"/>
            <BoxSummon icon={<TbBrandNextjs/>} title="Nextjs" color="#6388ab"/>
            <BoxSummon icon={<TbBrandVite/>} title="ViteJs" color="#e0234f"/>
        </div>

        
    </PageLayout>
  )
}
