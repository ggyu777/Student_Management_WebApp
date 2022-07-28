import styled from "styled-components";
import {
  footer_logo,
  adress_icon,
  mail_icon,
  phone_icon,
  fax_icon,
  NaviLogo
} from "../assets";

export default function Footer() {
  return (
    <Foot>
      <div className="footerBox">
        <div className="footerLogo">
          <img src={NaviLogo} alt="OE.DOT" />
          <p>대한민국 대표 브랜드 대상 <br /> 공무원 학습 부분 1위</p>
        </div>
        <div className="footerInfo">
          <p>
            <strong className="callNumber">
              학습지원센터 
              <span> 02-6331-1009</span>
            </strong>
            <span className="openTime">
              평일: <strong>09:00~18:00</strong> <span>(주말 및 공휴일 휴무)</span>
            </span>
          </p>
          <p>
            학원 및 각 계열사 전화번호는 해당 사이트에서 확인하시기 바랍니다.
          </p>
          <p>
            <span className="footerPdr">에듀해시글로벌파트너스㈜ 서울특별시 영등포구 영등포로 347,11F <dd>대표 : 전중훤</dd></span> 사업자번호 326-81-01064
          </p>
          <p>
            <span className="footerPdr">통신판매업신고번호 : 2019-서울영등포-0937</span> 학원등록번호 110111-6841038 서울특별시 남부교육지원청 제 795호
          </p>
          <p>
            <span className="footerPdr">개인정보관리책임자 : 전중훤</span> <dd>TEL : 02-6331-1009 </dd> <dd>FAX : 02-6331-1008</dd>
          </p>
          <p>
            E-mail : support@eduhashglobal.com
          </p>
          <p>
            Copyrightⓒ 에듀해시글로벌파트너스㈜. All Rights Reserved.
          </p>
        </div>
      </div>
    </Foot>
  );
}

const Foot = styled.footer`
  width: 100%;
  background-color: #4285F4;
  color: #fff;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
    .footerBox{
      width: 1024px;
      margin: 0 auto;
      display: flex;

      @media (max-width: 768px){
        display: block;
        width: 100%;
        text-align: center;
      }
      .footerLogo{
        padding-left: 63px;
        padding-top: 34px;

        @media (max-width: 768px){
          padding: 32px 0 0 0;
        }
        img{
          width: 86px;
        }

        p{
          padding-top: 12px;
          font-size: 10px;
          line-height: 15px;
        }
      }

      .footerInfo{
        padding: 10px 0 10px 62px;

        @media (max-width: 768px){
            padding: 12px 0 32px;
          }
        p{
          font-size: 10px;
          line-height: 15px;

          &:first-child{
            padding-bottom: 3px;
          }

          .callNumber{
              font-weight: 700;
              padding-right: 4px;
              @media (max-width: 768px){
                display: block;
                padding-bottom: 2px;
                padding-right: 0;
              }
            span{
              font-size: 14px;
              font-weight: 700;

              @media (max-width: 768px){
                display: block;
                padding-top: 2px;
                
              }
            }
          }

          .openTime{
            strong{
              font-weight: 700;
              @media (max-width: 768px){
                padding-top: 2px;
              }
            }

            span{
                @media (max-width: 768px){
                  display: block;
                }
              }
          }

          .footerPdr{
            padding-right: 4px;

            dd{
              @media (max-width: 768px) {
                display: block;
              }
            }

            @media (max-width: 768px){
              padding-right: 0%;
              display: block;
            }
          }

          @media (max-width: 768px){
            &:first-child, :nth-child(3), :nth-child(5){
              padding-bottom: 16px;
            }
          }
        }
      }

      @media (max-width: 1024px){
        width: 100%
      }
    }
`;
