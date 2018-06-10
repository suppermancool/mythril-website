import React from 'react';
import Carousel from 'nuka-carousel';

import './style.scss';

export default function SectionC() {
  return (
    <div styleName="group">
      <div styleName="w-slide">
        <Carousel
          wrapAround
          swiping={false}
          heightMode="max"
          renderBottomCenterControls={({ currentSlide }) => (
            <div styleName="w-slider-bottom">
              {[...Array(2)].map((x, i) => <div styleName={`w-slider-dot ${(i === currentSlide) ? 'w-active' : ''}`} data-wf-ignore="" />)}
            </div>
          )}
          renderCenterLeftControls={({ previousSlide }) => (
            <div onClick={previousSlide} styleName="w-icon-slider left" onKeyDown={() => {}} role="presentation" />
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <div onClick={nextSlide} styleName="w-icon-slider right" onKeyDown={() => {}} role="presentation" />
          )}
        >
          <div styleName="w-slide">
            <div styleName="slidercontent">
              <div styleName="quoteblock">
                <p styleName="quotemark">&quot;</p>
                <blockquote styleName="block-quote">Judging the tools based on the results in this research, Mythril has the largest set of mistakes it can detect (...) Mythril is therefore the best candidate for developers seeking static analysis.</blockquote>
                <p styleName="quotemark">&quot;</p>
              </div>
              <div styleName="authorblock">
                <div styleName="author">Rick Fontein</div>
                <div styleName="firm">University of Twente</div>
              </div>
            </div>
          </div>
          <div styleName="w-slide">
            <div styleName="slidercontent">
              <div styleName="quoteblock">
                <p styleName="quotemark">&quot;</p>
                <blockquote styleName="block-quote">Before asking someone else to put their money into your smart contract, you should at the very least run it through Mythril.</blockquote>
                <p styleName="quotemark">&quot;</p>
              </div>
              <div styleName="authorblock">
                <div styleName="author">Rick Tyler J Kuhn</div>
                <div styleName="firm">Developer at AIKON</div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div styleName="whatisblock">
        <p styleName="paragraph what">Mythril detects a range of security issues, including integer underflows, owner-overwrite-to-Ether-withdrawal, and others. However, the analysis will not detect business logic issues and is not equivalent to formal verification.</p>
        <h1 styleName="heading what">What is Mythril?</h1>
      </div>
      <div styleName="howblock">
        <h1 styleName="heading how">How it works</h1>
        <p styleName="paragraph how">Mythril is a security analysis tool for Ethereum smart contracts. It uses concolic analysis, taint analysis and control flow checking to detect a variety of security vulnerabilities. The analysis is based on laser-ethereum, a symbolic execution library for EVM bytecode.</p>
      </div>
      <a href="/#" styleName="button">Visit Github</a>
    </div>
  );
}
