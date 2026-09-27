//package com.healthcare_website.healtcare.Service;
//
//import com.healthcare_website.healtcare.Request.LeadRequest;
//
//import org.springframework.mail.SimpleMailMessage;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.stereotype.Service;
//
//@Service
//public class EmailService {
//
//    private final JavaMailSender mailSender;
//
//    public EmailService(JavaMailSender mailSender) {
//        this.mailSender = mailSender;
//    }
//
//    public void sendLeadEmail(LeadRequest request) {
//
//        SimpleMailMessage message = new SimpleMailMessage();
//
//        message.setTo("rajjat.kashyap123@gmail.com");
//
//        message.setSubject(
//                "New Healthcare Website Lead - "
//                        + request.getFormType()
//        );
//
//        String emailBody =
//                "New lead received from Healthcare Website\n\n"
//                        + "Name: " + request.getName() + "\n"
//                        + "Mobile: " + request.getMobile() + "\n"
//                        + "City: " + request.getCity() + "\n"
//                        + "Form Type: " + request.getFormType() + "\n";
//
//        message.setText(emailBody);
//
//        mailSender.send(message);
//    }
//}

package com.PpcByRajat.digital.Service;

import com.PpcByRajat.digital.Request.LeadRequest;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Async
    public void sendLeadEmail(LeadRequest request) {

        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo("rajjat.kashyap123@gmail.com");

        message.setSubject(
                "New Healthcare Website Lead - "
                        + request.getFormType()
        );

        String emailBody =
                "New lead received from Healthcare Website\n\n"
                        + "Name: " + request.getName() + "\n"
                        + "Mobile: " + request.getMobile() + "\n"
                        + "City: " + request.getCity() + "\n"
                        + "Form Type: " + request.getFormType();

        message.setText(emailBody);

        mailSender.send(message);
    }
}