<<<<<<< HEAD

=======
import React from 'react';
import './Contact.css';

const Contact = () => {
	return (
		<section class='contact-page-sec'>
			<h1 className='text-center padding-contact-text font-bold drop-shadow-2xl rainbow-text'>
				Contact Us
			</h1>
			<div class=''>
				<div class='row'>
					<div class='col-md-4'>
						<div class='contact-info'>
							<div class='contact-info-item'>
								{/* <div class='contact-info-icon'>
									<FaFacebook className=''></FaFacebook>
								</div> */}
								<div class='contact-info-text'>
									<h2>Address</h2>
									<span>Excel Tower, 4rth Floor</span>
									<span>Shubidbajar, Sylhet City</span>
								</div>
							</div>
						</div>
					</div>
					<div class='col-md-4'>
						<div class='contact-info'>
							<div class='contact-info-item'>
								{/* <div class='contact-info-icon'>
									
								</div> */}
								<div class='contact-info-text'>
									<h2>E-mail</h2>
									<span>rental@gmail.com</span>
									<span>info@gmail.com</span>
								</div>
							</div>
						</div>
					</div>
					<div class='col-md-4'>
						<div class='contact-info'>
							<div class='contact-info-item'>
								{/* <div class='contact-info-icon'>
									
								</div> */}
								<div class='contact-info-text'>
									<h2>office time</h2>
									<span>Sun - Thu 9:00 am - 7.00 pm</span>
									<span>Fri-Sat - Off Day</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class='row'>
					<div class='col-md-8'>
						<div class='contact-page-form' method='post'>
							{/* <h2>Get in Touch</h2> */}
							<form action='' method='post'>
								<div class='row'>
									<div class='col-md-6 col-sm-6 col-xs-12'>
										<div class='single-input-field'>
											<input
												type='text'
												placeholder='Your Name'
												name='name'
											/>
										</div>
									</div>
									<div class='col-md-6 col-sm-6 col-xs-12'>
										<div class='single-input-field'>
											<input
												type='email'
												placeholder='E-mail'
												name='email'
												required
											/>
										</div>
									</div>
									<div class='col-md-6 col-sm-6 col-xs-12'>
										<div class='single-input-field'>
											<input
												type='text'
												placeholder='Phone Number'
												name='phone'
											/>
										</div>
									</div>
									<div class='col-md-6 col-sm-6 col-xs-12'>
										<div class='single-input-field'>
											<input
												type='text'
												placeholder='Time'
												name='subject'
											/>
										</div>
									</div>
									<div class='col-md-12 message-input'>
										<div class='single-input-field'>
											<textarea
												placeholder='Write Your Message'
												name='message'
											></textarea>
										</div>
									</div>
									<div class='single-input-fieldsbtn'>
										<input type='submit' value='Send Now' />
									</div>
								</div>
							</form>
						</div>
					</div>
					{/* <div class='col-md-4'>
						<div class='contact-page-map'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109741.02912911311!2d76.69348873658222!3d30.73506264436677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1553497921355'
								width='100%'
								height='450'
								frameborder='0'
								style='border:0'
								allowfullscreen
							></iframe>
							<img className="w-50 h-450" src='https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80' />
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default Contact;
>>>>>>> 8306378667a6628613bd711c683443c48ba69e17
