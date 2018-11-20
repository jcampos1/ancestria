import React from 'react';
import {required, confirmationPassword, validatePassword} from 'utils/forms/validators/index';
import Wizard from 'components/User/Signup/SignupForm/components/Wizard/container/index';
import SignuFormTabsContainer from 'components/User/Signup/SignupForm/components/SignupFormTabs/container/index';
import { InputField } from 'utils/forms/render/index';
// the hoc
import { withNamespaces } from 'react-i18next';
import './styles/SignupForm.scss';

export class SignupForm extends React.PureComponent {
	render () {
		const {t} = this.props;
		const tabs = [{title: t('wizard.user_data')}, {title: t('wizard.network_account')}];

		return (
			<div className="signup_form shadow-lg px-5 pb-5 bg-white rounded position-relative">
				<SignuFormTabsContainer tabs={tabs} />
				<div className="signup_form__content">
					<Wizard onSubmit={() => null}>
						<Wizard.Page>
							<div className="row">
								<div className="col">
									<div className="form-group">
								  		<InputField 
								  			name="first_name"
								  			labelText={t('signup.first_name')}
								  			type="text" 
											className="form-control" 
											validate={required} />
									</div>
								</div>
								<div className="col">
									<div className="form-group">
								  		<InputField 
								  			name="last_name"
								  			labelText={t('signup.last_name')}
								  			type="text" 
											className="form-control" 
											validate={required} />
									</div>
								</div>
							</div>
							<div className="form-group">
						  		<InputField 
						  			name="email"
						  			labelText={t('email')}
						  			type="email" 
									className="form-control" 
									validate={required} />
							</div>
							<div className="form-group">
						  		<InputField 
						  			name="password1"
						  			labelText={t('password')}
						  			type="password" 
									className="form-control" 
									validate={validatePassword} />
							</div>
							<div className="form-group">
						  		<InputField 
						  			name="password2"
						  			labelText={t('signup.confirm_password')}
						  			type="password" 
									className="form-control" 
									validate={confirmationPassword} />
							</div>
						</Wizard.Page>
						<Wizard.Page>
							<div className="form-group">
						  		<InputField 
						  			name="name"
						  			labelText={t('name')}
						  			type="text" 
									className="form-control" 
									validate={required} />
							</div>
						</Wizard.Page>
					</Wizard>
				</div>
			</div>
		);
	}
}

export default withNamespaces()(SignupForm);