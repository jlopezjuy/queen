package ar.com.anelsoftware.app.web.rest;

import com.codahale.metrics.annotation.Timed;
import ar.com.anelsoftware.app.service.MarcaService;
import ar.com.anelsoftware.app.web.rest.errors.BadRequestAlertException;
import ar.com.anelsoftware.app.web.rest.util.HeaderUtil;
import ar.com.anelsoftware.app.web.rest.util.PaginationUtil;
import ar.com.anelsoftware.app.service.dto.MarcaDTO;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;
import java.util.stream.StreamSupport;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * REST controller for managing Marca.
 */
@RestController
@RequestMapping("/api")
public class MarcaResource {

    private final Logger log = LoggerFactory.getLogger(MarcaResource.class);

    private static final String ENTITY_NAME = "marca";

    private final MarcaService marcaService;

    public MarcaResource(MarcaService marcaService) {
        this.marcaService = marcaService;
    }

    /**
     * POST  /marcas : Create a new marca.
     *
     * @param marcaDTO the marcaDTO to create
     * @return the ResponseEntity with status 201 (Created) and with body the new marcaDTO, or with status 400 (Bad Request) if the marca has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/marcas")
    @Timed
    public ResponseEntity<MarcaDTO> createMarca(@Valid @RequestBody MarcaDTO marcaDTO) throws URISyntaxException {
        log.debug("REST request to save Marca : {}", marcaDTO);
        if (marcaDTO.getId() != null) {
            throw new BadRequestAlertException("A new marca cannot already have an ID", ENTITY_NAME, "idexists");
        }
        MarcaDTO result = marcaService.save(marcaDTO);
        return ResponseEntity.created(new URI("/api/marcas/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /marcas : Updates an existing marca.
     *
     * @param marcaDTO the marcaDTO to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated marcaDTO,
     * or with status 400 (Bad Request) if the marcaDTO is not valid,
     * or with status 500 (Internal Server Error) if the marcaDTO couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/marcas")
    @Timed
    public ResponseEntity<MarcaDTO> updateMarca(@Valid @RequestBody MarcaDTO marcaDTO) throws URISyntaxException {
        log.debug("REST request to update Marca : {}", marcaDTO);
        if (marcaDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        MarcaDTO result = marcaService.save(marcaDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, marcaDTO.getId().toString()))
            .body(result);
    }

    /**
     * GET  /marcas : get all the marcas.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of marcas in body
     */
    @GetMapping("/marcas")
    @Timed
    public ResponseEntity<List<MarcaDTO>> getAllMarcas(Pageable pageable) {
        log.debug("REST request to get a page of Marcas");
        Page<MarcaDTO> page = marcaService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/marcas");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /marcas/:id : get the "id" marca.
     *
     * @param id the id of the marcaDTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the marcaDTO, or with status 404 (Not Found)
     */
    @GetMapping("/marcas/{id}")
    @Timed
    public ResponseEntity<MarcaDTO> getMarca(@PathVariable Long id) {
        log.debug("REST request to get Marca : {}", id);
        Optional<MarcaDTO> marcaDTO = marcaService.findOne(id);
        return ResponseUtil.wrapOrNotFound(marcaDTO);
    }

    /**
     * DELETE  /marcas/:id : delete the "id" marca.
     *
     * @param id the id of the marcaDTO to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/marcas/{id}")
    @Timed
    public ResponseEntity<Void> deleteMarca(@PathVariable Long id) {
        log.debug("REST request to delete Marca : {}", id);
        marcaService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    /**
     * SEARCH  /_search/marcas?query=:query : search for the marca corresponding
     * to the query.
     *
     * @param query the query of the marca search
     * @param pageable the pagination information
     * @return the result of the search
     */
    @GetMapping("/_search/marcas")
    @Timed
    public ResponseEntity<List<MarcaDTO>> searchMarcas(@RequestParam String query, Pageable pageable) {
        log.debug("REST request to search for a page of Marcas for query {}", query);
        Page<MarcaDTO> page = marcaService.search(query, pageable);
        HttpHeaders headers = PaginationUtil.generateSearchPaginationHttpHeaders(query, page, "/api/_search/marcas");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

}
