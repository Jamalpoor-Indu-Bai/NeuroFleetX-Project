//package com.infosys.neurofleetxbackend.service;
//
//import com.infosys.neurofleetxbackend.model.Role;
//import com.infosys.neurofleetxbackend.model.User;
//import com.infosys.neurofleetxbackend.repository.UserRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class UserService {
//
//    private final UserRepository userRepository;
//    private final PasswordEncoder passwordEncoder;
//
//    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
//        this.userRepository = userRepository;
//        this.passwordEncoder = passwordEncoder;
//    }
//
//    // Register a new user
//    public User registerUser(User user) {
//        if (userRepository.existsByEmail(user.getEmail())) {
//            throw new RuntimeException("Email already exists!");
//        }
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
//        return userRepository.save(user);
//    }
//
//    // Get all users (only for admin dashboards)
//    public List<User> getAllUsers() {
//        return userRepository.findAll();
//    }
//
//    // Get user by email
//    public Optional<User> getUserByEmail(String email) {
//        return userRepository.findByEmail(email);
//    }
//
//    // Update user role (only ADMIN should call this)
//    public User updateUserRole(Long id, Role newRole) {
//        User user = userRepository.findById(id)
//                .orElseThrow(() -> new RuntimeException("User not found"));
//        user.setRole(newRole);
//        return userRepository.save(user);
//    }
//
//    // Delete user (optional admin operation)
//    public void deleteUser(Long id) {
//        userRepository.deleteById(id);
//    }
//}
//
