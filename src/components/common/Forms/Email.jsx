import {
	Body,
	Button,
	Container,
	Head,
	Hr,
	Html,
	Preview,
	Row,
	Section,
	Text,
} from "@react-email/components";
import PropTypes from "prop-types";

export const AirbnbReviewEmail = ({ clientName, clientEmail, reviewText }) => {
	const previewText = `Tienes un correo de ${clientName}`;

	return (
		<Html>
			<Head />
			<Preview>{previewText}</Preview>
			<Body style={main}>
				<Container style={container}>
					<Section style={{ paddingBottom: "20px" }}>
						<Row>
							<Text style={heading}>Esto fue lo que {clientName} escribio</Text>
							<Text style={review}>{reviewText}</Text>
							<Text style={paragraph}>
								Now that the review period is over, we’ve posted {clientName}
								’s review to your Airbnb profile.
							</Text>
							<Text style={{ ...paragraph, paddingBottom: "16px" }}>
								While it’s too late to write a review of your own, you can send
								your feedback to {clientName} using your Airbnb message thread.
							</Text>
							<Button style={button} href={`mailto:${clientEmail}`}>
								Respondele a ${clientName} por correo electrónico
							</Button>
						</Row>
					</Section>
					<Hr style={hr} />
				</Container>
			</Body>
		</Html>
	);
};

export default AirbnbReviewEmail;
//prop validation
AirbnbReviewEmail.propTypes = {
	clientName: PropTypes.string.isRequired,
	clientEmail: PropTypes.string.isRequired,
	reviewText: PropTypes.string.isRequired,
};
const main = {
	backgroundColor: "#ffffff",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
	margin: "0 auto",
	padding: "20px 0 48px",
	width: "580px",
	maxWidth: "100%",
};

const heading = {
	fontSize: "32px",
	lineHeight: "1.3",
	fontWeight: "700",
	color: "#484848",
};

const paragraph = {
	fontSize: "18px",
	lineHeight: "1.4",
	color: "#484848",
};

const review = {
	...paragraph,
	padding: "24px",
	backgroundColor: "#f2f3f3",
	borderRadius: "4px",
};

const button = {
	backgroundColor: "#ff5a5f",
	borderRadius: "3px",
	color: "#fff",
	fontSize: "18px",
	paddingTop: "19px",
	paddingBottom: "19px",
	textDecoration: "none",
	textAlign: "center",
	display: "block",
	width: "100%",
};

const hr = {
	borderColor: "#cccccc",
	margin: "20px 0",
};
