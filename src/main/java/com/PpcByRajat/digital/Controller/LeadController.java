package com.PpcByRajat.digital.Controller;

import com.PpcByRajat.digital.Request.LeadRequest;
import com.PpcByRajat.digital.Service.EmailService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/leads")
public class LeadController {

    private final EmailService emailService;

    public LeadController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping
    public ResponseEntity<String> submitLead(
            @RequestBody LeadRequest request) {

        if (request.getName() == null ||
                request.getName().trim().isEmpty()) {

            return ResponseEntity
                    .badRequest()
                    .body("Name is required");
        }

        if (request.getMobile() == null ||
                !request.getMobile().matches("\\d{10}")) {

            return ResponseEntity
                    .badRequest()
                    .body("Valid 10 digit mobile number is required");
        }

        if (request.getCity() == null ||
                request.getCity().trim().isEmpty()) {

            return ResponseEntity
                    .badRequest()
                    .body("City is required");
        }

        // Email runs in background
        emailService.sendLeadEmail(request);

        // Respond immediately
        return ResponseEntity.ok(
                "Lead submitted successfully"
        );
    }
}