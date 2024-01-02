import QRCode from "react-qr-code";
import FooterComponent from "../../components/Footer/FooterComponent";
import HeaderComponent from "../../components/Header/HeaderComponent";
import "./Styles.modules.css";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import getPaymentPix from "../../client/RequestPaymentPix";

function PaymentPage() {
    const [payment, setPayment] = useState({
        linkToPay: ""
    });

    const [cookies] = useCookies(["session"]);
    const session = cookies['session'];

    const handleCopyLink = ()=> {
        navigator.clipboard.writeText(payment.linkToPay);
    }

    useEffect(()=> {
        getPaymentPix(session, setPayment);
    }, [session, setPayment]);

    return (
        <div className="payment-app">
            <HeaderComponent />
                <div className="payment-main">
                    <div className="payment-selector">
                        <div className="payment-information">
                            <div className="payment-plan">
                                <p> Plano - Customer </p>
                                <p> 1 Semana </p>
                            </div>
                            <p> Aceitamos pagamentos somente via Pix. </p>
                        </div>
                        <div className="payment-qrcode">
                            <QRCode 
                            size={200}
                            value={payment.linkToPay}
                            viewBox={`0 0 200 200`}
                            />
                        </div>
                        <div className="payment-link">
                            <span className="link-to-pay" onClickCapture={handleCopyLink}>Copiar link de pagamento Pix</span>
                        </div>
                    </div>
                </div>
            <FooterComponent />
        </div>
    );
}


export default PaymentPage;