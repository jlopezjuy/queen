package ar.com.anelsoftware.app.cucumber.stepdefs;

import ar.com.anelsoftware.app.QueenApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = QueenApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
